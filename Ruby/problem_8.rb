require 'pry'

# Get the entire contents of the file as a string without the newline
number = IO.read('data/problem_8.txt').chomp
num_array = number.split("").map(&:to_i)

max_prod = 0
num_array.each_cons(5) do |five_ints|
  product = five_ints.inject(1) {|prod, x| prod *= x}
  max_prod = product if product > max_prod
end

puts max_prod
