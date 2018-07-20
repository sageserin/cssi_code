"""
    exploring data types
    lists are mutable
    dictionaries
"""


x = [1, 2, 3]

def weird(num, default_ls=None):
    default_ls = default_ls or [] #
    default_ls.append(num)
    print(default_ls)

weird(1)
weird(2)
weird(3)


dict = {1: 'a', 2:'b', 3:['c', 'd', 'e']}
