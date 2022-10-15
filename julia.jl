Pkg.clone("https://github.com/JuliaComputing/MySQL.jl")
using MySQL
con = mysql_connect(HOST, USER, PASSWD, DBNAME)

command = """CREATE TABLE Employee
         (
            ID INT NOT NULL AUTO_INCREMENT,
            Name VARCHAR(255),
            Salary FLOAT,
            JoinDate DATE,
            LastLogin DATETIME,
            LunchTime TIME,
            PRIMARY KEY (ID)
         );"""
response = mysql_query(con, command)
if (response == 0)
   println("Create table succeeded.")
else
   println("Create table failed.")
end

command = """SELECT * FROM Employee;"""
dframe = execute_query(con, command)

command = """SELECT * FROM Employee;"""

stmt = mysql_stmt_init(con)

if (stmt == C_NULL)
   error("Error in initialization of statement.")
end

response = mysql_stmt_prepare(stmt, command)
mysql_display_error(con, response != 0,
                  "Error occured while preparing statement for query \"$command\"")
                  
dframe = mysql_stmt_result_to_dataframe(stmt)
mysql_stmt_close(stmt)
