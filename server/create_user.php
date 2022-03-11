<? //создаёт нового пользователя или возращаем ошибку, если есть email/login in DB
header('Content-type: text/html; charset=windows-1251');
include($_SERVER['DOCUMENT_ROOT']."/admin/data/initdb.php");
$d=date("Y-m-d");
$title=$_GET['title']; $pwd=strtolower($_GET['pwd']);  $email=strtolower($_GET['email']);  $phone=strtolower($_GET['phone']);
$sql = "INSERT INTO `userSite` (`id`, `title`, `pwd`, `email`, `phone`, `activated`) VALUES (NULL, '$title', '$pwd', '$email', '$phone', 0)";
$res=mysql_query($sql); 
// echo $sql; //попадает в результат функции

if ($res){ 
     $res1=mysql_query("SELECT LAST_INSERT_ID()");
		 $r=mysql_fetch_array($res1); 
     echo($r[0]);
} else echo "0";	
?>

