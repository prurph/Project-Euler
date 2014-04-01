to_1000 = (0...1000).to_a
to_1000.select! do |num|
  num % 3 == 0 || num % 5 == 0
end

puts to_1000.inject(:+)

