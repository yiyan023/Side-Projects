# Write your MySQL query statement below
SELECT Employee.name, Bonus.bonus
FROM Employee
LEFT JOIN Bonus #use tables when you have mutliple conditions
ON Employee.empId = Bonus.empId 
WHERE Bonus.bonus < 1000 or Bonus.bonus IS NULL;