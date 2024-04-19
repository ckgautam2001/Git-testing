#syntax of dictionary
con_factor={}
#create unique key and assign its value
con_factor['dollar']=72
con_factor['euro']=82
#printing the keys and values of the dictionary
print(con_factor)
#printing the keys of the dictionary
print(con_factor.keys())
#use can list the dictionary values and keys using list
print(list(con_factor.values()))
# or
print(list(con_factor.keys()))
#to print all the items in the dictionary
print(con_factor.items())
#updating the values
con_factor['dollar']=70
print(con_factor['dollar'])
#to delete the specific key and value
del con_factor['dollar']
print(con_factor)