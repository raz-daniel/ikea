-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 02, 2025 at 09:58 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ikea`
--
CREATE DATABASE IF NOT EXISTS `ikea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `ikea`;

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

CREATE TABLE `furniture` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `dimensions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`id`, `dimensions`, `color`, `price`, `type_id`, `created_at`, `updated_at`) VALUES
('bab92e54-f7b0-11ef-92b3-0242ac110002', '120 x 80 x 30', 'White', 80, '233a1380-f7b0-11ef-92b3-0242ac110002', '2025-03-02 21:53:09', '2025-03-02 21:53:09'),
('c6a0958d-f7b0-11ef-92b3-0242ac110002', '50 x 30 x 100', 'Brown Wood', 57, '23375ac7-f7b0-11ef-92b3-0242ac110002', '2025-03-02 21:53:29', '2025-03-02 21:53:29'),
('c6a0df33-f7b0-11ef-92b3-0242ac110002', '60 x 40 x 90', 'Green', 60, '23375ac7-f7b0-11ef-92b3-0242ac110002', '2025-03-02 21:53:29', '2025-03-02 21:53:29'),
('c6a0e599-f7b0-11ef-92b3-0242ac110002', '70 x 50 x 85', 'Blue', 40, '23375ac7-f7b0-11ef-92b3-0242ac110002', '2025-03-02 21:53:29', '2025-03-02 21:53:29'),
('c6a0e6bd-f7b0-11ef-92b3-0242ac110002', '65 x 35 x 95', 'Red', 100, '23375ac7-f7b0-11ef-92b3-0242ac110002', '2025-03-02 21:53:29', '2025-03-02 21:53:29');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`, `created_at`, `updated_at`) VALUES
('23375ac7-f7b0-11ef-92b3-0242ac110002', 'Chair', '2025-03-02 21:48:54', '2025-03-02 21:48:54'),
('233a1380-f7b0-11ef-92b3-0242ac110002', 'Table', '2025-03-02 21:48:54', '2025-03-02 21:48:54'),
('233a4795-f7b0-11ef-92b3-0242ac110002', 'Sofa', '2025-03-02 21:48:54', '2025-03-02 21:48:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
