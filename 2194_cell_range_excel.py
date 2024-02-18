# 2194
s = "K1:L2"
# Output: ["K1","K2","L1","L2"]

s2 = "A1:F1"
#Output: ["A1","B1","C1","D1","E1","F1"]

def cellsInRange(s: str):
        output = []
        start_row = int(s[1])
        end_row = int(s[4])
        # get charcodes of column letters
        start_col = ord(s[0])
        end_col = ord(s[3])

        # Find differnce in rows -2
        # Find difference between cols - 2
        # Loop over rows + 1
        # r = start row
        # c = start col

        # calc stopping point
        # convert to numbers to
        row_count = end_row - start_row + 1
        col_count = end_col - start_col + 1
        stopping_point = row_count * col_count + 1

        for x in range(1,stopping_point):
            if x == 1:
                r = start_row
                c = start_col

            cell = chr(c) + str(r)

            output.append(cell)

            if r == end_row:
                c = c + 1
                r = start_row
            else:
                r = r + 1

        return output

