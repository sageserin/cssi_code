import webapp2
from google.appengine.api import urlfetch
import urllib
import urllib2
import json
import jinja2

getmeme_url = 'https://api.imgflip.com/get_memes'
caption_url = 'https://api.imgflip.com/caption_image'

template_loader = jinja2.FileSystemLoader(searchpath='./')
template_env = jinja2.Environment(loader=template_loader)

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'

        result = urlfetch.fetch(getmeme_url) #technically gets the whole api json
        result_dict = json.loads(result.content)
        ids_dict = {}
        for i in range(100):
            id = result_dict['data']['memes'][i]['id']
            title = result_dict['data']['memes'][i]['name']
            ids_dict[id] = title

        form_template = template_env.get_template('templates/form.html')
        self.response.write(form_template.render({'memes':ids_dict}))


class MemePage(webapp2.RequestHandler):
    def post(self):
        template_id = self.request.get("template_id")
        username = self.request.get('username')
        password = self.request.get('password')
        text0 = self.request.get("text0")
        text1 = self.request.get("text1")

        template = {
                'template_id': template_id,
                'username': username,
                'password': password,
                'text0': text0,
                'text1': text1,
        }

        going = urlfetch.fetch(
            url=caption_url,
            payload=urllib.urlencode(template),
            method=urlfetch.POST)

        memedict = json.loads(going.content)
        picture_url = memedict['data']['url']
        self.response.write('<img src={url}>'.format(url=picture_url))

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/meme', MemePage),
], debug=True)
