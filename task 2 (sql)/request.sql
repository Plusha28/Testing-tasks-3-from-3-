SELECT 'Январь' AS 'Месяц', '31' AS 'Количество дней'
UNION

SELECT 'Февраль', EXTRACT(DAY FROM LAST_DAY(CONCAT(YEAR(CURDATE()),'-02-01')))
UNION

SELECT 'Март', '31'
UNION

SELECT 'Апрель', '30'
UNION

SELECT 'Май', '31'
UNION

SELECT 'Июнь', '30'
UNION

SELECT 'Июль', '31'
UNION

SELECT 'Август', '31'
UNION

SELECT 'Сентябрь', '30'
UNION

SELECT 'Октябрь', '31'
UNION

SELECT 'Ноябрь', '30'
UNION

SELECT 'Декабрь', '31';