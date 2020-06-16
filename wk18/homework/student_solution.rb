# adjective = "Big Bad"

# hello_world = "Hello World #{adjective}"

# puts hello_world.upcase

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# p nums.uniq
# p nums.push(5)
# p nums.pop
# p nums.shift
# p nums.unshift
# p nums.length
# p nums.include? "8"
# p nums.find_all {|i| i>10}
# p nums.all? {|i| i>0}
# p nums.any? {|i| i % 8}
# p nums.count {|i| i>4}
# p nums.each_with_index {|i, index| p i*index}
# p nums.find {|i| i%7 & i%5 & i>0}
# p nums.find_index {|i| i%7 & i%5 & i>0}
# p nums.first(3)
# p nums.last(5)
# p nums.group_by {|i| i%3===0}
# p nums.minmax
# p nums.reject {|i| i/3 != 0}
# p nums.select {|i| i/5 == 0}

# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# p colors.sample
# p colors.reverse
# p colors.map {|i| i.upcase}

# def find_area
#     a = 6
#     b = 4
#     a * b
# end
# puts find_area

# nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

# multiply_each_by_five = nums.map do |num|
#     num * 5
# end
# p multiply_each_by_five

# Hashes

# book = {
#   title: 'The Great Gatsby',
#   author: 'F Scott Fitzgerald',
#   year: 1925,
#   price: 10
# }

# lamp = {
#   type: 'reading',
#   brand: 'Ikea',
#   price: 25
# }

# table = {
#   type: 'bed side',
#   brand: 'Crate & Barrel',
#   color: 'birch',
#   price: 50
# }

# def print_price elem
#   p elem[:price]
# end
# print_price table

# def print_item_sums elem1, elem2
#   p elem1[:price] + elem2[:price]
# end
# print_item_sums table, lamp

