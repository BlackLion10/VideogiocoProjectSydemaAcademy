-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Dic 25, 2018 alle 19:06
-- Versione del server: 5.7.23
-- Versione PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gioco`
--
CREATE DATABASE IF NOT EXISTS `gioco` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gioco`;

-- --------------------------------------------------------

--
-- Struttura della tabella `gioco`
--

DROP TABLE IF EXISTS `gioco`;
CREATE TABLE IF NOT EXISTS `gioco` (
  `IDGioco` int(11) NOT NULL,
  `Nome` text NOT NULL,
  PRIMARY KEY (`IDGioco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `gioco`
--

INSERT INTO `gioco` (`IDGioco`, `Nome`) VALUES
(1, 'BETGame'),
(2, 'CavaliersGame');

-- --------------------------------------------------------

--
-- Struttura della tabella `partita`
--

DROP TABLE IF EXISTS `partita`;
CREATE TABLE IF NOT EXISTS `partita` (
  `IDPartita` int(11) NOT NULL AUTO_INCREMENT,
  `IDUtente` int(11) NOT NULL,
  `IDGioco` int(11) NOT NULL,
  `Punteggio` int(11) NOT NULL,
  PRIMARY KEY (`IDPartita`),
  KEY `partita_ibfk_1` (`IDGioco`),
  KEY `partita_ibfk_2` (`IDUtente`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `partita`
--

INSERT INTO `partita` (`IDPartita`, `IDUtente`, `IDGioco`, `Punteggio`) VALUES
(1, 2, 1, 600),
(2, 1, 1, 1000),
(5, 4, 1, 200),
(6, 3, 1, 800),
(7, 5, 1, 300),
(8, 6, 1, 300);

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

DROP TABLE IF EXISTS `utente`;
CREATE TABLE IF NOT EXISTS `utente` (
  `IDUtente` int(11) NOT NULL AUTO_INCREMENT,
  `Nickname` text NOT NULL,
  `Paese` text NOT NULL,
  `Password` varchar(11) NOT NULL,
  PRIMARY KEY (`IDUtente`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`IDUtente`, `Nickname`, `Paese`, `Password`) VALUES
(1, 'Benito', 'Francia', '0'),
(2, 'Stefano', 'Giappone', '0'),
(3, 'Federico', 'Giappone', '0'),
(4, 'Teo', 'Ecuador', '0'),
(5, 'Erika', 'Brasile', '0'),
(6, 'Alessandro', 'Korea', '0');

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `partita`
--
ALTER TABLE `partita`
  ADD CONSTRAINT `partita_ibfk_1` FOREIGN KEY (`IDGioco`) REFERENCES `gioco` (`IDGioco`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
