def sum_squares(num)
  return (1..num).to_a.inject {|sum, el| sum + el**2 }
end

def square_sum(num)
  return (1..num).to_a.inject(:+) ** 2
end

puts square_sum(100) - sum_squares(100)
