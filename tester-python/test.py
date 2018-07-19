"""first testing python file"""

def fizzbuzz():
"""
    Takes a user input value and spits out an answer depending on whether the value is divisible by 3, 5, or both.

    Args:
    none

    Returns:
    'fizzbuzz' if divisible by 3 and 5
    'fizz' if divisible by 3 only
    'buzz' if divisible by 5 only
    'nah bro' if not in any of the above categories

"""

    x = input('enter a number: ')
    if x%3 == 0 and x%5 == 0:
        print('fizzbuzz')
    elif (x%3 == 0):
        print('fizz')
    elif (x%5 == 0):
        print('buzz')
    else:
        print('nah bro')

fizzbuzz()

"""exploring the world of python"""
# print('Hello world')
#
# if 1==2:
#     print('good')
# else:
#     print('what')
#
# x = 1
# while x <= 5:
#     print(x)
#     print('good')
#     x += 1
#
# for thing in range(5):
#     print(thing)
#
# for val in range(15, 100):
#     print(
#         '{val} is divisible by 2: {dunno}'.format(
#         val=val, dunno=val%2 == 0
#         )
#     )
#
# def hello_func():
#     print('hello lunchtime')
#
#
# hello_func()
