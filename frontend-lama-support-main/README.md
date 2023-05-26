When you pull the repository in a new folder, type in the command line:

npm i
tsc -w

To delete folder from previous commits; 
git filter-branch --force --index-filter \ 'git rm -r --cached --ignore-unmatch YOUR_DIRECTORY/' \--prune-empty --tag-name-filter cat -- --all

# Empty database for testing

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mayolama
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mayolama
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mayolama2` DEFAULT CHARACTER SET utf8mb3 ;
USE `mayolama2` ;

-- -----------------------------------------------------
-- Table `mayolama`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`contact` (
  `contactID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(225) NOT NULL,
  `subject` VARCHAR(225) NOT NULL,
  `message` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`contactID`))
ENGINE = InnoDB
AUTO_INCREMENT = 60
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`lama_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`lama_info` (
  `lamaID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `gender` CHAR(1) NOT NULL,
  `biotext` BLOB NOT NULL,
  `userID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`lamaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`lama_picture`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`lama_picture` (
  `pictureID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `lamaID` INT UNSIGNED NOT NULL,
  `picture` BLOB NOT NULL,
  `isProfilePicture` ENUM('0', '1') NOT NULL,
  PRIMARY KEY (`pictureID`),
  INDEX `lamaPicture_idx` (`lamaID` ASC) VISIBLE,
  CONSTRAINT `lamaPicture`
    FOREIGN KEY (`lamaID`)
    REFERENCES `mayolama`.`lama_info` (`lamaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`user` (
  `userID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `profilePicture` BLOB NULL DEFAULT NULL,
  `role` ENUM('user', 'seller', 'admin') NOT NULL,
  PRIMARY KEY (`userID`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`seller_lama`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`seller_lama` (
  `seller_LamaID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_ID` INT UNSIGNED NOT NULL,
  `lama_ID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`seller_LamaID`),
  INDEX `userCon_idx` (`user_ID` ASC) VISIBLE,
  INDEX `sellerCon_idx` (`lama_ID` ASC) VISIBLE,
  CONSTRAINT `sellerCon`
    FOREIGN KEY (`lama_ID`)
    REFERENCES `mayolama`.`lama_info` (`lamaID`),
  CONSTRAINT `userCon`
    FOREIGN KEY (`user_ID`)
    REFERENCES `mayolama`.`user` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`subscription`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`subscription` (
  `subID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `price` DECIMAL(5,2) NOT NULL,
  `lamaID` INT NOT NULL,
  PRIMARY KEY (`subID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`sub_benefits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`sub_benefits` (
  `sub_BenefitsID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `subID` INT UNSIGNED NOT NULL,
  `benefit` TINYBLOB NOT NULL,
  PRIMARY KEY (`sub_BenefitsID`),
  INDEX `benefits_idx` (`subID` ASC) VISIBLE,
  CONSTRAINT `benefits`
    FOREIGN KEY (`subID`)
    REFERENCES `mayolama`.`subscription` (`subID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`user_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`user_address` (
  `user_AddressID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `userID` INT UNSIGNED NOT NULL,
  `streetname` VARCHAR(255) NOT NULL,
  `houseNumber` VARCHAR(25) NOT NULL,
  `zipCode` VARCHAR(45) NOT NULL,
  `city` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_AddressID`),
  INDEX `user_idx` (`userID` ASC) VISIBLE,
  CONSTRAINT `user`
    FOREIGN KEY (`userID`)
    REFERENCES `mayolama`.`user` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mayolama`.`user_sub`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mayolama2`.`user_sub` (
  `user_SubID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `userID` INT UNSIGNED NOT NULL,
  `subID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`user_SubID`),
  INDEX `userSub_idx` (`userID` ASC) VISIBLE,
  INDEX `subCon_idx` (`subID` ASC) VISIBLE,
  CONSTRAINT `subCon`
    FOREIGN KEY (`subID`)
    REFERENCES `mayolama`.`subscription` (`subID`),
  CONSTRAINT `userSub`
    FOREIGN KEY (`userID`)
    REFERENCES `mayolama`.`user` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

# Test data, for the database above. 

```sql
insert into mayolama2.lama_info (name,age,gender,biotext, userID) values ('Berrie', 4, 'M', 'Berrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Berrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!', 2);
insert into mayolama2.lama_info (name,age,gender,biotext, userID) values ('Marie', 4, 'V', 'Marie is an old but happy and active lama. She loves carrots and she loves a good nose pet. Marie is available for walks, but only if you give her a carrot after! Please support our sweet Marie!', 3);
insert into mayolama2.lama_info (name,age,gender,biotext, userID) values ('Gerrie', 4, 'V', 'Gerrie is an old but happy and active lama. He loves carrots and he loves a good nose pet. Gerrie is available for walks, but only if you give him a carrot after! Please support our sweet Berrie!', 2);
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (1, 'assets/adrian.jpg', '1');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (1, 'assets/alec.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (1, 'assets/berrie2.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (1, 'assets/gerrit.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (1, 'assets/karim.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (2, 'assets/adrian.jpg', '1');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (2, 'assets/alec.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (2, 'assets/berrie2.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (2, 'assets/gerrit.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (2, 'assets/karim.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (3, 'assets/adrian.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (3, 'assets/alec.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (3, 'assets/berrie2.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (3, 'assets/gerrit.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (3, 'assets/karim.jpg', '1');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (4, 'assets/adrian.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (4, 'assets/alec.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (4, 'assets/berrie2.jpg', '1');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (4, 'assets/gerrit.jpg', '0');
INSERT INTO mayolama2.lama_picture (lamaID, picture, isProfilePicture) values (4, 'assets/karim.jpg', '0');
INSERT INTO mayolama2.User (userID, name, username, mail, password, role) values ('7', NULL, 'verkoper', 'verkoper@verkoper.com', 'verkoper', 'seller');

```
