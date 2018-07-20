# print('this is my file and it is running')

def my_func(content):
    print(content)

# my_func('hello')

def my_main_func():
    print('this is my file and it is running')
    my_func('hello')


if __name__ == '__main__':
    my_func('i am in a main')
    my_main_func()
