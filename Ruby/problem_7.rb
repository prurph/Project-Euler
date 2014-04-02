def is_prime(num)
  divisor = 2
  while (divisor * divisor <= num)
    if num % divisor == 0
      return false
    else
      divisor += 1
    end
  end
  true
end

count = 1
num = 2
while (count <= 10001)
  if is_prime(num)
    puts num
    count += 1
  end
  num += 1
end
