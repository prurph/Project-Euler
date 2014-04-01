def divide20(start)
  divisors = (1..20).to_a
  divisors.each do |div|
    if start % div != 0
      return false
    elsif div == 20
      puts start
      return start
    end
  end
end

start = 20
while !(divide20(start))
  start += 20
end
