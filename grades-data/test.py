import sys

base_in, base_out, number = 10, 2, "1025"
if sys.argv[1:]:
    base_in = int(sys.argv[1])
if sys.argv[2:]:
    base_out = int(sys.argv[2])
if sys.argv[3:]:
    number = sys.argv[3]


def convert_base(num, base_in, base_out):
    # Convert the input number to an integer in base 10
    n = int(num, base_in)

    # Convert the integer to a string in the output base
    digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if n == 0:
        return "0"
    s = ""
    while n > 0:
        s = digits[n % base_out] + s
        n //= base_out

    return s


for i, num in enumerate(number):
    if not int(num):
        continue
    print(f"{i}: {num}")

print(convert_base(number, base_in, base_out))
print(convert_base(number, base_in, 16))
