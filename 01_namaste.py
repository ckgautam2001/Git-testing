t1 = "Amity"
t2 = "crore"
t3 = "my package"
i = "ck"
# list creating
shopping = ["Bread", "Coffee", "Sugar"]
print(shopping)
for i in range(3):
    print(i)

for item in shopping:
    print(item)
# append or adding
shopping.append("Cured")
print(shopping)
print(shopping[1])
print(shopping[0])
print()
for i in range(4):
    print(shopping[i])
shopping.insert(2, "oil")
print()
print(shopping)
ages = [1, 23, 45, 34, 5, 6, 45, 45, 70, 3, 34, 23, 55]
print(ages.count(70))
ages.sort()
print(ages)
print(t1)
ages.reverse()
print(ages)
students=["arun","rajesh","harish","akansha","lakshmi"]
students.sort()
print(students)
students.insert(0, "JOC")
print(students)


#slicing--> list_name[start:end+1]
#list_name[start_index:end_index+1]

print(students[1:5])
print(students[:])
print(students[3:])
print(students[:5])
#default start index=0
#default end index=len(list)
