ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "tiovictor_wordpress_db",
      "user"     => "",
      "password" => "",
      "host"     => "127.0.0.1",
      "socket"   => "",
      "table_prefix"   => "satin_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => false,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
