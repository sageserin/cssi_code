'''fun with dictionaries'''

sage = {'name': 'sage',
        'age': 17,
        'hair_color': 'auburn',
        'school': 'cornell',
        'favorite_color': 'grey'}

print(sage)


class Person(object):
    def __init__( #'required' initializing stuff
            self, name, age, hair_color,
            school, favorite_color,
            hungry=True, sleepy=True):
        self.name = name
        self.age = age
        self.hair_color = hair_color
        self.school = school
        self.favorite_color = favorite_color
        self.hungry = hungry
        self.sleepy = sleepy

    def __str__(self):
        person_string = 'name: {n}, age: {a}'.format(n=self.name, a=self.age)
        return person_string

    def eat(self, food):
        print('yummy, {f}'.format(f=food))
        self.hungry = False

    def sleep(self, hours):
        if hours >= 8:
            print('i slept for {h} hours'.format(h=hours))
            self.sleepy = False
        else:
            print('i only slept for {h} hours and didn\'t get enough sleep'.format(h=hours))
            self.sleepy = True


sage = Person(
            name='sage',
            age=17,
            hair_color='auburn',
            school='cornell',
            favorite_color='grey')

print(sage.name)
print('sage is hungry: {h}'.format(h=sage.hungry))
sage.eat('food')
print('sage is hungry: {h}'.format(h=sage.hungry))

isaac = Person(
            name='isaac',
            age=18,
            hair_color='blond',
            school='ut',
            favorite_color='black')

print(isaac.name)
print('isaac is sleepy: {s}'.format(s=isaac.sleepy))
isaac.sleep(6)
print('isaac is sleepy: {s}'.format(s=isaac.sleepy))
