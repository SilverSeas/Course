# Exercise 1: Filter even numbers in a list
# using filter function
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4, 6, 8, 10]

# Exercise 2: Square elements in a list
# using map function
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Exercise 3: Squared even numbers in a list
# using map and filter functions
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared_even_numbers = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))
print(squared_even_numbers)  # Output: [4, 16, 36, 64, 100]


# Exercise 4: Find numbers between min and max
# that are multiples of 7 but not 5
# using an explicit for loop
def find_numbers(min_value, max_value):
    result = []
    for i in range(min_value, max_value + 1):
        if i % 7 == 0 and i % 5 != 0:
            result.append(i)
    return result


print(find_numbers(1, 50))  # Output: [7, 14, 21, 28, 42, 49]


# Exercise 4: Find numbers between min and max
# that are multiples of 7 but not 5
# using filter and lambda functions
def find_numbers(min_value, max_value):
    return list(filter(lambda x: x % 7 == 0 and x % 5 != 0, range(min_value, max_value + 1)))


print(find_numbers(1, 50))  # Output: [7, 14, 21, 28, 42, 49]

# Exercise 5: Compute totals for orders in an online shop
# using an explicit for loop
orders = [
    {
        'id': 'order_001',
        'item': 'Introduction to Python',
        'quantity': 1,
        'price_per_item': 32,
    },
    {
        'id': 'order_002',
        'item': 'Advanced Python',
        'quantity': 3,
        'price_per_item': 40,
    },
    {
        'id': 'order_003',
        'item': 'Python web frameworks',
        'quantity': 2,
        'price_per_item': 51,
    },
]


def compute_totals(orders):
    result = []
    for order in orders:
        total_price = order['quantity'] * order['price_per_item']
        if total_price < 100:
            total_price += 10
        result.append((order['id'], total_price))
    return result


print(compute_totals(orders))  # Output: [('order_001', 42), ('order_002', 120), ('order_003', 102)]
