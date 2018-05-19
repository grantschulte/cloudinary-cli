Cloudinary CLI
===

A lightweight get, upload, and delete, Cloudinary CLI.

## Install

```
npm i cloudinary-cli -g
```

## Add Cloudinary Configuration

Edit the Cloudinary CLI configuration file `.cloudinarycli.json` found in
your home directory. You'll need to set your cloud name, api key, and secret key. These values can be found in your Cloudinary dashboard.

Alternatively, you can set these variables with the CLI:

```
cloudinary-cli config:set cloudName=my-cloud-name
```

To view your current configuration variables run:

```
cloudinary-cli config
```

## Get

Get a single image by name

```
cloudinary-cli get sample
```

Get a folder/prefix/resource by name

```
// To get all images in your /scenery folder
cloudinary-cli get scenery -r
```

## Upload

Upload an image into a specific folder
```
// Upload mountain.jpg from current directory into /scenery
cloudinary-cli upload mountain.jpg -n sierra-mountains -f scenery
```

## Delete

*Note: This is a dangerous operation, make sure not to delete an entire folder
unless it's an auto-upload folder (or unless you really don't need the images anymore). For remotely fetched images deleting and invalidating an entire folder will simply invalidate the cache (really useful) and the images will be re-fetched by Cloudinary from their remote resource the next time they are requested.*

```
// Delete a single image named sample and invalidate the cache
cloudinary-cli delete sample -i

// Delete an entire folder named thumbs and invalidate all of them.
cloudinary-cli delete thumbs -r -i
```

## Invalidate
To invalidate an images cache on deletion pass the `-i` option.

## Help

For more help...

```
cloudinary-cli --help
```
