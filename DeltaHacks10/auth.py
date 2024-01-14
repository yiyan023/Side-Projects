from flask import Blueprint, render_template, request, flash
<<<<<<< Updated upstream
import pymongo
import bcrypt
import certifi

auth = Blueprint('auth', __name__)
client = pymongo.MongoClient("mongodb+srv://yiyanhh:kcyDdQBUnW9Ak6DB@cluster0.hdoctva.mongodb.net/", tlsCAFile=certifi.where())
db = client.get_database("users")
user = db.appname
=======
from flask_pymongo import PyMongo
from pymongo import MongoClient
import bcrypt

mongo = PyMongo()

auth = Blueprint('auth', __name__)
client = MongoClient('mongodb+srv://yiyanhh:DeltaHacks10@cluster0.8me0jdr.mongodb.net/')
# gets the database
db = client.get_database("appname")
users = db.users
>>>>>>> Stashed changes

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password1 = request.form.get('password1')

        existing_user = user.find_one({'username': username})
        existing_password = user.find_one({'password': password1})

        if existing_user and existing_password and existing_user['username'] == username and existing_password['password'] == password1:
            return render_template('signedin.html')
        else:
            flash("Incorrect login information. Try again.")

    return render_template('login.html')

@auth.route('/logout')
def logout():
    return render_template('login.html')

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        username = request.form.get('username')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')

        existing_user = user.find_one({'username': 'happyman'})
        existing_email = user.find_one({'email': email})

        if len(email) < 4:
            flash('Email must be greater than 4 characters') #flash shows a message on the screen
        elif password1 != password2:
            flash('Passwords don\'t match')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters')
        elif existing_user and username == existing_user['username']:
            flash('That username already exists. Please choose another one')
        elif existing_email and email == existing_email['email']:
            flash('That email is already registered. Please enter another one.')
        else:
            user_input = {'firstname': firstName, 'username' : username, 'email':email, 'password': password1}
            user.insert_one(user_input)

            user_data = user.find_one({"email":email})
            new_email = user_data["email"]

            flash('Account created!', category='success')
            return render_template('signedin.html')

            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            user_input = {'firstname': firstName, 'email':email, 'password':hashed}
            users.insert_one(user_input)

            user_data = users.find_one({"email":email})
            new_email = user_data["email"]

            flash('Account created!', category='success')
            return render_template('signedin.html')

    return render_template('signup.html')

