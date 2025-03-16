DROP TABLE `users`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_scams` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`price` text NOT NULL,
	`author` text NOT NULL,
	`pickup_address` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_scams`("id", "title", "description", "image", "price", "author", "pickup_address", "created_at") SELECT "id", "title", "description", "image", "price", "author", "pickup_address", "created_at" FROM `scams`;--> statement-breakpoint
DROP TABLE `scams`;--> statement-breakpoint
ALTER TABLE `__new_scams` RENAME TO `scams`;--> statement-breakpoint
PRAGMA foreign_keys=ON;