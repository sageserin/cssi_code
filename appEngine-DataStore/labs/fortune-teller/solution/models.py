from google.appengine.ext import ndb


class Movie(ndb.Model):
    title = ndb.StringProperty(required=True)
    media_type = ndb.StringProperty(required=True, default='Movie')
    runtime = ndb.IntegerProperty(required=False)
    rating = ndb.FloatProperty(required=False)

class User(ndb.Model):
    username = ndb.StringProperty(required=True)
    password = ndb.StringProperty(required=True)
    email = ndb.StringProperty(required=True)
    phone_num = ndb.IntegerProperty(required=False)
    location = ndb.GeoPtProperty(required=False)
#     friends = ndb.StructuredProperty(Friend, repeated=True)
#
# class Friend(ndb.Model):
#     username = ndb.StringProperty(required=True)
#     snapscore = ndb.IntegerProperty(required=True)
#     location = ndb.GeoPtProperty(required=False)
