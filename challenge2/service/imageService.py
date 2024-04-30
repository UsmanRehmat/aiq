import json
from model.image import ImageTable, db
import pandas as pd
from PIL import Image
from decimal import Decimal
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap
from flask import Flask, send_file
import io

def create_image():
    try:
        # create tables if not exists.
        db.create_all()
        db.session.commit()

        image_df = pd.read_csv('./data/data.csv', index_col=0).dropna()
        image = Image.fromarray(image_df.values)
        resize_image = image.resize((150, 5460))
        np_array = np.array(resize_image)
        print(np_array.shape)
        resize_image_df =  pd.DataFrame(np_array, index=image_df.index)
        print(resize_image_df.shape)
        rows = []
        for i in resize_image_df.index:
            image_data_json = resize_image_df.loc[i].to_json()
            image_instance = ImageTable(depth=i, data=image_data_json)
            rows.append(image_instance)
            
        db.session.bulk_save_objects(rows)

        db.session.commit()
        return 'data created sucessfully'
      

    except Exception as e:
        print(e)
        return 'image not stored in db'

def get_image_frames(depth_min, depth_max, colors):
    frames = db.session.query(ImageTable).filter(ImageTable.depth.between(float(depth_min), float(depth_max))).all()
    data_list = []
    for frame in frames:
        data_list.append(json.loads(frame.data))
    

    df = pd.DataFrame(data_list)
    # plt.colorbar(label='Custom Colormap')
    # plt.title('Frame')
    plt.imsave('frame.png',df, cmap=create_custom_colormap(colors), format='png')
    

    return send_file('frame.png', mimetype='image/png')

def  create_custom_colormap(colors):
   
    num_colors = len(colors)
    color_positions = np.linspace(0, 1, num_colors)
    color_map = LinearSegmentedColormap.from_list("custom_colormap", list(zip(color_positions, colors)))
    return color_map


