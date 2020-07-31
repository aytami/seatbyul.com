var tableData = [
			{
      'first_name':'Russell',
      'last_name':'Wilson',
      'rank':'1',
      },
      {
      'first_name':'Matt',
      'last_name':'Hasselbeck',
      'rank':'2',
      },
      {
      'first_name':'Jim',
      'last_name':'Zorn',
      'rank':'3',
      },
      {
      'first_name':'Brady',
      'last_name':'Quinn',
      'rank':'4',
      },
      {
      'first_name':'Charly',
      'last_name':'Whitehurst',
      'rank':'5',
      },
      {
      'first_name':'Duane',
      'last_name':'Devine',
      'rank':'6',
      },
      {
      'first_name':'Tom',
      'last_name':'Brady',
      'rank':'7',
      },
      {
      'first_name':'Arron',
      'last_name':'Rogers',
      'rank':'8',
      },  
]

/*
	1 - Loop Through Array & Access each value
  2 - Create Table Rows & append to table
*/


for (var i in tableData){
  //Keep in mind we are using "Template Litterals to create rows"
  var row = `<tr>
  							<td>${tableData[i].rank}</td>
  							<td>${tableData[i].first_name}</td>
                <td>${tableData[i].last_name}</td>
                `
	var table = $('#table-body')
  table.append(row)
}
