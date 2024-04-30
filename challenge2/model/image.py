from flask_sqlalchemy import SQLAlchemy # type: ignore

db = SQLAlchemy()



class ImageTable(db.Model):
    '''Data for ON/OFF should be dumped in this table.'''

    __tablename__ = 'image'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    depth = db.Column(db.Numeric, primary_key=False)
    data = db.Column(db.JSON, primary_key=False)
    

    # method used to represent a class's objects as a string
    def __repr__(self):
        return '<machineid %r>' % self.depth
        