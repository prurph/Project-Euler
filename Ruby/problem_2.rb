answer = 2
fib = [1, 2]

loop do
  next_fib = fib[-2] + fib[-1]
  if next_fib > 4E6
    puts answer
    break
  end
  answer += next_fib if next_fib % 2 == 0
  fib.push(next_fib)
end

