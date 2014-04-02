def divide20(start)
  20.times do |i|
    if start % (i+1) != 0
      return false
    end
  end
  return true
end

start = 20
while !(divide20(start))
  start += 20
end
puts start
