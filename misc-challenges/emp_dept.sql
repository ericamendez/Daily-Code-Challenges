SELECT employee.dept_id, COUNT(emp_id), SUM(salary), dept_name
FROM employee JOIN department ON department.dept_id = employee.dept_id
GROUP BY employee.dept_id, dept_name ORDER BY employee.dept_id ASC