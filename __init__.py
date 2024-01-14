from flask import Flask, request
from pymongo import MongoClient
from flask_pymongo import PyMongo

def create_app():
    app = Flask(__name__) #used to initialize flask
    
    app.config['MONGO_URI'] = 'mongodb+srv://yiyanhh:DeltaHacks10@cluster0.8me0jdr.mongodb.net/'

    mongo = PyMongo(app)
    mongo.init_app(app)

    from .views import views #import the blueprint 
    from .auth import auth

#register blueprints
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
