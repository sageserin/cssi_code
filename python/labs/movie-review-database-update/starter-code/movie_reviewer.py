#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

inside_movie = {
    "title": "Inside Out",
    "id": "tt2096673",
    "year_released": 2012, #2015
    "rating": "PG",
    "score": 7.5, #8.2
    "out_of": 10, #remove
    "reviews": 463787 #489496
    #add genres: animation, adventure, comedy
}

# Do not edit the code above!

# Write your code below to update the information in accordance with its
# IMDB page: http://www.imdb.com/title/tt2096673/

# for x, y in my_dict.items():
#     print('Key: {k}, Value: {v}'.format(k=x, v=y))

inside_movie['year_released'] = 2015
inside_movie['score'] = 8.2
del inside_movie['out_of']
inside_movie['reviews'] = 489496
inside_movie['genres'] = 'animation, adventure, comedy'

for x, y in inside_movie.items():
    print('Key: {k}, Value: {v}'.format(k=x, v=y))

print(inside_movie)
