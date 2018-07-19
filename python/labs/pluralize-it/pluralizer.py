def pluralize():
    num = input('how many?: ')
    thing = input('of what?: ')

    if num == 1:
        print 'you have {val} {here}'.format(val=num, here=thing)
    else:
        if thing[-3:] == 'ife':
            print 'you have {val} {here}ives'.format(val=num, here=thing[:-3])
        elif thing[-2:] == 'sh' or thing[-2] == 'ch':
            print 'you have {val} {here}es'.format(val=num, here=thing)
        elif thing[-2:] == 'us':
            print 'you have {val} {here}i'.format(val=num, here=thing[:-2])
        elif thing[-1:] == 'y':
            print 'you have {val} {here}ies'.format(val=num, here=thing[:-1])
        else:
            print 'you have {val} {here}s'.format(val=num, here=thing)

pluralize()
