# Cards from Database

## Description
This module takes object from database and build card item in HTML page. Price from database comes in USD and converted to BYN, if you don't need this change, you need to delete 'changeToBYN' method in 'AdvItem' class. Also this module can takes data not from Database, you need to call function with operator 'new', example: new AdvItem(src, alt, title, descr, price, parentSelector, ...classes).render();

## Customization

* You can change HTML-structure in 'render' method, if you need another HTML-structure
* In order to take data from Database, change 'getResource' function call: change param and change parent selector in 'then' method.

### Example Database-structure:
```json
{
    "img": "img.jpm",
    "altimg": "altImg",
    "title": "The title of the Item",
    "descr": "The description of the Item",
    "price": "The number of the price in USD"
}
```
