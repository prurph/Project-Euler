a = b = (100..999).to_a
palindromes = []

a.each do |first|
  b.each do |second|
    product = first * second
    palindromes.push(product) if product == product.to_s.split('').reverse.join.to_i
  end
end

puts palindromes.sort.last
