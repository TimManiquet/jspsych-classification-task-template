'''
Make a list of stimuli
----------------------
This script is designed to create a list of stimuli and save it as a 
.js script, so that it can be read by jsPsych. It takes in the example
stimuli from the template jsPsych classification task, but can easily
be adapted for any usage.

Usage:

For each list of stimuli you need, run the next three steps:
 1. List your stimuli using 'fetch_images'
 2. From the list of stimuli, create a list with each image 
    and its relevant data.
 3. Convert this list to a json-like format.
 4. Save the result to a .js file.
 
In the example below, this step is repeated twice; once for
the training trials, once for the main task trials. The 
results are merged to form one single output file from which
both training and task trials can be read.
'''

import glob, json, os, pathlib

## Define some utility functions

def fetch_images(img_dir, ext=None):
    '''This function returns a list of images with a given
    extension from a given directory.'''
    if ext:
        files = glob.glob(os.path.join(img_dir, '*' + ext))
    else:
        files = glob.glob(os.path.join(img_dir, '*'))
    return files


def make_json_list(files):
    '''Takes in a list of files and extract a file-wise list of
    dictionaries usable in a json file.'''

    json_list = [{
        'filename': file,
        # 'category': (pathlib.Path(file).stem).split('_')[0], # take the first part of the filename
        'category': [c for c in categories if c in file][0],
        
        
    } for file in files]
    
    return json_list


def make_json_str(json_list, json_vars):
    '''
    Takes in a list of strings to turn into json variables along with 
    their corresponding variable names.'''
    # create an empty json content
    json_str = ''
    # loop through the variable names and content
    for string, varname in zip(json_list, json_vars):
        json_str += f"var {varname} = {json.dumps(string, indent=4)};\n"
    
    return json_str


def write_json(string, filename = 'stimuli.js'):
    '''Takes a string as input and writes its content
    as a json file.'''
    with open(filename, "w") as js_file:
        js_file.write(string)


## Declare some variables that we wish to keep track of

# Declare the categories we have
categories = [
    'animal',
    'people',
    'object',
    'scene',
    'food',
    'sport'
]

# Declare a mapping of categories and animacy
animacy_mapping = {
    'animal': 'animate',
    'people': 'animate',
    'object': 'inanimate',
    'scene': 'inanimate',
    'food': 'inanimate',
    'sport': 'animate'
}



## Start making the list

# Make a list for the main task trials
task_files = fetch_images(
    img_dir = './stimuli', # directory where your images are located
    ext='.jpg' # extension of your files
)

# List the stimuli 
task_list = [{
    'filename': file, # list the file names
    'image': file.split('_')[-1].split('.')[0], # here we take only the last part of the file name
    'category': [c for c in categories if c in file][0], # extract the category matching with the file
    'animacy': [animacy_mapping[c] for c in categories if c in file][0] # map the category to its animacy
} for file in task_files]

# Repeat the process for the training images
train_files = fetch_images(img_dir = './training_stimuli', ext='.jpg')

# Make a list without mask
train_list = [{
    'filename': file, # list the file names
    'image': file.split('_')[-1].split('.')[0], # here we take only the last part of the file name
    'category': [c for c in categories if c in file][0], # extract the category matching with the file
    'animacy': [animacy_mapping[c] for c in categories if c in file][0] # map the category to its animacy
} for file in train_files]


## Make a json-like string with both lists
json_string = make_json_str(
    # give the stimuli lists you want here, each list will become one variable in jspsych
    json_list = [task_list, train_list],
    # give the name of the variables you want for each list, these will be used by jspsych 
    json_vars = ['stimuli', 'training_stimuli'] 
)

# finally, write the results in a .js file
write_json(
    # give the string as input
    string = json_string,
     # choose a name for your file; it has to match what you give to jspsych
    filename = 'stimuli.js'
)
