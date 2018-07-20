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

choice = ""

print("Welcome to the shopping list app!")

shopping_list = []

while choice.lower() != "e":
    print("Here is your current shopping list:")
    print(shopping_list)
    print("Please choose your action from the following list:")
    print("a. Add an item to the list")
    print("b. Remove an item from the list")
    print("c. Check to see if an item is on the list")
    print("d. Show all items on the list")
    print("e. exit")

    choice = input("Enter your choice [a|b|c|d|e]: ")

    # Your code below! Handle the cases when the user chooses a, b, c, d, or e

    if choice == 'a':
        add = input('What do you want to add?: ')
        if not (choice in shopping_list):
            # add = add.split().strip()
            shopping_list.append(add)
            print('Added! Here is your updated shopping list: ')
            print(shopping_list)
        else:
            print('Sorry, that item is already on your list!')
    elif choice == 'b':
        remove = input('What do you want to remove?: ')
        if remove in shopping_list:
            valid = input('Are you sure you want to remove this item? [yes|no]: ')
            if valid == 'yes':
                shopping_list.remove(remove)
                print('Removed! Here is your updated shopping list: ')
                print(shopping_list)
            if valid == 'no':
                print('Alright, disaster averted.')
        else:
            print('Sorry, you\'re trying to remove something that isn\'t on your list!')
    elif choice == 'c':
        check = input('What do you want to look for?: ')
        if check in shopping_list:
            print('{checked} is already on your shopping list!'.format(checked = check))
            destroy = input('Would you like to remove {checked} from your list? [yes/no]: '.format(checked = check))
            if destroy == 'yes':
                shopping_list.remove(destroy)
                print('Removed! Here is your updated shopping list:')
                print(shopping_list)
            else:
                print('Alright, disaster averted.')
        else:
            print('{checked} isn\'t on your shopping list yet!'.format(checked = check))
            create = input('Would you like to add {checked} to your list? [yes/no]: '.format(checked = check))
            if create == 'yes':
                shopping_list.append(create)
                print('Added! Here is your updated shopping list:')
                print(shopping_list)
            else:
                print('Alright, maybe next time.')
    elif choice == 'd':
        print('Here is your shopping list: ')
        print(shopping_list)
    elif choice == 'e':
        print('Okay! See ya later.')
        break
    else:
        choice = input('That is not an option! Please choose from [a|b|c|d|e]: ')
