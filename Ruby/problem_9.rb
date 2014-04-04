require 'pry'

(1...500).each do |a|
  b = a + 1
  loop do
    squared_sum = a**2 + b**2
    c = Math.sqrt(squared_sum)
    if a + b + c == 1000
      # overly fancy just to use inject
      puts [a, b, c].inject(1) { |prod, val| prod *= val }
    end
    break if a + b + c > 1000
    b += 1
  end
end
