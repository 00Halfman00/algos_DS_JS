results =  ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]



def fizzBuzz(n):
        res = []
        for i in range(1, n + 1):
            print(i)
            if(i % 15 == 0): res.append("FizzBuzz")
            elif(i % 5 == 0): res.append("Buzz")
            elif(i % 3 == 0): res.append("Fizz")
            else: res.append(f'{i}')
        return res

print(fizzBuzz(15))
