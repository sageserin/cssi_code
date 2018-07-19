n1 = input('give me a noun: ')
v1 = input('give me a verb in past tense: ')
adj1 = input('give me an adjective: ')
n2 = input('give me a noun: ')
adj2 = input('give me an adjective: ')

story = 'the {noun1} {verb1} over the {adjective1} {noun2}. then the {noun1} decided to stop being {adjective2}.'.format(noun1=n1, verb1=v1, adjective1=adj1, noun2=n2, adjective2=adj2)

print(story)
