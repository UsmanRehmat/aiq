from flask import Blueprint # type: ignore
from controller.imageController import index, create, get_frames

blueprint = Blueprint('blueprint', __name__)

blueprint.route('/', methods=['GET'])(index)
blueprint.route('/create', methods=['GET'])(create)
blueprint.route('/frames', methods=['GET'])(get_frames)