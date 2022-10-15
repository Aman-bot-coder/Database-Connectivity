// C# code to connect the database
using System;
using System.Data.SqlClient;

namespace Database_Operation {

class DBConn {

	// Main Method
	static void Main()
	{
		Connect();
		Console.ReadKey();
	}

	static void Connect()
	{
		string constr;

		// for the connection to
		// sql server database
		SqlConnection conn;

		// Data Source is the name of the
		// server on which the database is stored.
		// The Initial Catalog is used to specify
		// the name of the database
		// The UserID and Password are the credentials
		// required to connect to the database.
		constr = @"Data Source=DESKTOP-GP8F496;Initial Catalog=Demodb;User ID=sa;Password=24518300";

		conn = new SqlConnection(constr);

		// to open the connection
		conn.Open();

		Console.WriteLine("Connection Open!");

		// to close the connection
		conn.Close();
	}
}
}
