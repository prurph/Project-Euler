require 'pry'

def factor_tree(tot)
  tree = []
  divisor = 2
  max = tot
  until divisor > max do
    if max % divisor == 0
      tree << divisor
      max = max / divisor
      divisor = 1
    end
    divisor += 1
  end
  tree
end

puts factor_tree(600851475143).inspect
