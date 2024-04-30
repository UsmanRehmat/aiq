import json

from flask import request
from model.image import ImageTable, db
from service.imageService import get_image_frames, create_image

def index():
    return {'status': 'OK',
            'localhost:5000/machines/create': 'Create table in mysql database',
            'localhost:5000/machines/insert': 'Insert data in mysql database table(Inserttable)'}


def create():
    
    return create_image()


# insert data into table.
def get_frames():
    depth_min = request.args.get('depth_min')
    depth_max = request.args.get('depth_max')
    colors = request.args.getlist('colors')
    return get_image_frames(depth_min, depth_max, colors)