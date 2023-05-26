CREATE DATABASE  IF NOT EXISTS `mayolama` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mayolama`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: mayolama
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `contactID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(225) NOT NULL,
  `subject` varchar(225) NOT NULL,
  `message` varchar(500) NOT NULL,
  PRIMARY KEY (`contactID`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (40,'asdf','f@f.nl','asdf','asdf'),(41,'asdf','f@f.nl','asdf','asdf'),(42,'asdf','f@f.nl','asdf','asdf'),(43,'asdf','f@f.nl','asdf','asdf'),(44,'asdf','f@f.nl','asdf','asdf'),(45,'','','',''),(46,'','','',''),(47,'','','',''),(48,'','','',''),(49,'','','',''),(50,'','','',''),(51,'','','',''),(52,'','','',''),(53,'asdf','','',''),(54,'asdf','','',''),(55,'asdf','','',''),(56,'asdf','','test school',''),(57,'asdf','','test school','tetetet'),(58,'asdf','','test school','tetetet'),(59,'asdf','yes','test school','tetetet'),(60,'','fadsf','',''),(61,'','asdfff','rrrrrrrr',''),(62,'yoo','yoo@yo.yo','yoo','yoo'),(63,'yo','yo@yo.nl','yo','yo'),(64,'yo','yo@ah.nl','yo','yo'),(65,'asdf','youri.janssen@hva.nlf','asdf','adsf'),(66,'adsfa','youri.janssen@hva.nlf','fas','gsdfg'),(67,'adsf','f@f.nl','asdf','fghh'),(68,'asdf','youri.janssen@hva.nlf','asdf','aaaa'),(69,'asfd','f@f.nl','fasdf','asdf');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lama_info`
--

DROP TABLE IF EXISTS `lama_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lama_info` (
  `lamaID` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `gender` char(1) NOT NULL,
  `biotext` blob NOT NULL,
  `userID` int unsigned NOT NULL,
  PRIMARY KEY (`lamaID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lama_info`
--

LOCK TABLES `lama_info` WRITE;
/*!40000 ALTER TABLE `lama_info` DISABLE KEYS */;
INSERT INTO `lama_info` VALUES (1,'Berrie',4,'M',_binary 'Berrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Berrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2),(2,'Marie',4,'V',_binary 'Marie is an old but happy and active lama. She loves carrots and she loves a good nose pet. Marie is available for walks, but only if you give her a carrot after! Please support our sweet Marie!',3),(3,'Gerrie',4,'V',_binary 'Gerrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Gerrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2),(4,'Berrie',4,'M',_binary 'Berrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Berrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2),(5,'Marie',4,'V',_binary 'Marie is an old but happy and active lama. She loves carrots and she loves a good nose pet. Marie is available for walks, but only if you give her a carrot after! Please support our sweet Marie!',3),(6,'Gerrie',4,'V',_binary 'Gerrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Gerrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2),(7,'youirirrrr',1,'m',_binary 'youirirrrr',13),(8,'asdf',15,'f',_binary 'afsdf',13),(9,'Berrie',4,'M',_binary 'Berrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Berrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2),(10,'Marie',4,'V',_binary 'Marie is an old but happy and active lama. She loves carrots and she loves a good nose pet. Marie is available for walks, but only if you give her a carrot after! Please support our sweet Marie!',3),(11,'Gerrie',4,'V',_binary 'Gerrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Gerrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!',2);
/*!40000 ALTER TABLE `lama_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lama_picture`
--

DROP TABLE IF EXISTS `lama_picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lama_picture` (
  `pictureID` int unsigned NOT NULL AUTO_INCREMENT,
  `lamaID` int unsigned NOT NULL,
  `picture` blob NOT NULL,
  `isProfilePicture` enum('0','1') NOT NULL,
  PRIMARY KEY (`pictureID`),
  KEY `lamaPicture_idx` (`lamaID`),
  CONSTRAINT `lamaPicture` FOREIGN KEY (`lamaID`) REFERENCES `lama_info` (`lamaID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lama_picture`
--

LOCK TABLES `lama_picture` WRITE;
/*!40000 ALTER TABLE `lama_picture` DISABLE KEYS */;
INSERT INTO `lama_picture` VALUES (6,7,_binary './assets/undefined','0'),(7,8,_binary './assets/undefined','0'),(8,1,_binary 'assets/adrian.jpg','1'),(9,1,_binary 'assets/alec.jpg','0'),(10,1,_binary 'assets/berrie2.jpg','0'),(11,1,_binary 'assets/gerrit.jpg','0'),(12,1,_binary 'assets/karim.jpg','0'),(13,2,_binary 'assets/adrian.jpg','1'),(14,2,_binary 'assets/alec.jpg','0'),(15,2,_binary 'assets/berrie2.jpg','0'),(16,2,_binary 'assets/gerrit.jpg','0'),(17,2,_binary 'assets/karim.jpg','0'),(18,3,_binary 'assets/adrian.jpg','0'),(19,3,_binary 'assets/alec.jpg','0'),(20,3,_binary 'assets/berrie2.jpg','0'),(21,3,_binary 'assets/gerrit.jpg','0'),(22,3,_binary 'assets/karim.jpg','1'),(23,4,_binary 'assets/adrian.jpg','0'),(24,4,_binary 'assets/alec.jpg','0'),(25,4,_binary 'assets/berrie2.jpg','1'),(26,4,_binary 'assets/gerrit.jpg','0'),(27,4,_binary 'assets/karim.jpg','0');
/*!40000 ALTER TABLE `lama_picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `idreview` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `title` varchar(100) NOT NULL,
  `experience` varchar(500) NOT NULL,
  `rating` int NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `lamaID` int DEFAULT NULL,
  PRIMARY KEY (`idreview`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (34,'Lyn','Wunderschön!!!','Einfach klasse! Die Alpaka sind sooo flauschig und sehen super super schön aus. Man merkt, dass hier mit viel Liebe gearbeitet wurde. Alles wurde auch sehr liebevoll verpackt und es war eine Freude das Paket zu öffnen. Vielen Dank an den Verkäufer dafür.\nDie Lieferung kam auch schon nach nur 3 Tagen an.\nKann man wirklich nur weiterempfehlen!',3,'2023-01-24 10:02:08',4),(35,'Chris','Perfect for Christmas','Lovely packageing and product, included some information about the source of materials and overall a resounding success. Great gift and would 100% recommend to others.',5,'2023-01-24 10:03:52',4),(36,'dunkleaterie','Frau liebt es','Ich habe das Alpaka meiner Frau zu Weihnachten geschenkt und sie liebt es. Eine ganze Weile saß es mit im Auto auf dem Weg zur Arbeit. Sie hat weitere Kleidung und eine Bürste gekauft um es noch mehr auszustatten. Ist sehr empfehlenswert.\nDer Verkäufer hat als Ersatz für die eigentlich beigefügten Accessoires andere hineingelegt. Fanden wir nun nicht schade, da diese genau so putzig sind wie die eigentlichen.',5,'2023-01-24 10:05:51',2),(37,'Günter H.','Kuschelweiche Alpakas zum Verlieben','Ich habe die zwei Alpakas verschenkt.\nSie haben große Freude bereitet und sind kuschelweich.\nIhre Namen sind Bruno und Mathilda.\nSie sind genauso ausgefallen wie sie abgebildet waren und wir waren alle zufrieden.\nAußerdem ist es ein Fairtrade Produkt und wir haben unseres dazu beigetragen.',4,'2023-01-24 10:06:45',1),(38,'Rob','Mijn tweede al van deze','De eerste had na iets meer dan 2 jaar een bekend euvel met de \'dubbelklik\' en ook nog eens aan beide kanten. Desondanks toch weer een nieuwe aangeschaft. Met de powerplate van Logitech een ideale combinatie van een echte goede gaming muis met het draadloos gemak van nooit officieel te hoeven laden.',5,'2023-01-24 10:09:05',3);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller_lama`
--

DROP TABLE IF EXISTS `seller_lama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller_lama` (
  `seller_LamaID` int unsigned NOT NULL AUTO_INCREMENT,
  `user_ID` int unsigned NOT NULL,
  `lama_ID` int unsigned NOT NULL,
  PRIMARY KEY (`seller_LamaID`),
  KEY `userCon_idx` (`user_ID`),
  KEY `sellerCon_idx` (`lama_ID`),
  CONSTRAINT `sellerCon` FOREIGN KEY (`lama_ID`) REFERENCES `lama_info` (`lamaID`),
  CONSTRAINT `userCon` FOREIGN KEY (`user_ID`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller_lama`
--

LOCK TABLES `seller_lama` WRITE;
/*!40000 ALTER TABLE `seller_lama` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller_lama` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscription` (
  `subID` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `lamaID` int NOT NULL,
  `benefits` varchar(300) NOT NULL,
  PRIMARY KEY (`subID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
INSERT INTO `subscription` VALUES (1,'Helping Hand',5.00,2,''),(2,'Lama Support',10.00,2,''),(3,'Lama Lover',25.00,2,''),(4,'Helping Hand',3.00,3,''),(5,'Lama Support',10.00,3,''),(6,'Lama Lover',19.99,3,''),(7,'Helping Hand',5.00,4,''),(8,'Lama Support',10.00,4,''),(9,'Lama Lover',15.00,4,''),(10,'adsf',15.00,8,'afsdf'),(11,'afsdf',15.00,8,'v'),(12,'afsdf',15.00,8,'afsdf');
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userID` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePicture` blob,
  `role` enum('user','seller','admin') NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,'asdfasdfa','youri.janssen@hva.nl','asdfasdfasdfasdfff',NULL,'user'),(2,NULL,'haallooditistest','youri.janssen@student.hku.nl','haaaaaaaaasdf',NULL,'user'),(3,NULL,'fffffffffffffffff','yourijanssen123@gmail.com','asdffffff',NULL,'user'),(5,NULL,'Deepness8494','youri.janssen@hva.nlf','ggggggggggggggg',NULL,'user'),(6,NULL,'faaaaaaa','ha@email.com','aaaaaaaaaaaa',NULL,'user'),(7,NULL,'nogeentest','f@f.nl','nogeentest',NULL,'user'),(8,NULL,'yoooo','w@w.ss','sssssssssssssss',NULL,'user'),(9,NULL,'ppppppp','f@ffffff.nl','pppppppppppp',NULL,'user'),(10,NULL,'faaaaaaaaaaaaa','s@fff.nl','aaaaaaaaaaa',NULL,'user'),(11,NULL,'asdfffffff','rrrr@ww.ww','asdfasdfaa',NULL,'user'),(12,NULL,'asdf3333333333','f@ff.fff','333333333333333',NULL,'user'),(13,NULL,'fffff','oo@fff.sa','youirirrrr',NULL,'seller');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `user_AddressID` int unsigned NOT NULL AUTO_INCREMENT,
  `userID` int unsigned NOT NULL,
  `streetname` varchar(255) NOT NULL,
  `houseNumber` varchar(25) NOT NULL,
  `zipCode` varchar(45) NOT NULL,
  `city` varchar(255) NOT NULL,
  PRIMARY KEY (`user_AddressID`),
  KEY `user_idx` (`userID`),
  CONSTRAINT `user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sub`
--

DROP TABLE IF EXISTS `user_sub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_sub` (
  `user_SubID` int unsigned NOT NULL AUTO_INCREMENT,
  `userID` int unsigned NOT NULL,
  `subID` int unsigned NOT NULL,
  PRIMARY KEY (`user_SubID`),
  KEY `userSub_idx` (`userID`),
  KEY `subCon_idx` (`subID`),
  CONSTRAINT `subCon` FOREIGN KEY (`subID`) REFERENCES `subscription` (`subID`),
  CONSTRAINT `userSub` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sub`
--

LOCK TABLES `user_sub` WRITE;
/*!40000 ALTER TABLE `user_sub` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_sub` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-25 11:22:09
