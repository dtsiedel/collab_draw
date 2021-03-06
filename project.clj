(defproject collab_draw "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [ring-server "0.5.0"]
                 [reagent "0.8.1"]
                 [reagent-utils "0.3.1"]
                 [ring "1.6.3"]
                 [figwheel-sidecar "0.5.16" :exclusions [http-kit commons-codec]]
                 [ring/ring-defaults "0.3.1"]
                 [compojure "1.6.1" :exclusions [commons-codec]]
                 [hiccup "1.0.5"]
                 [yogthos/config "1.1.1"]
                 [http-kit "2.1.18"]
                 ;TODO: migrate to 0.4.0 and the change-agent API
                 [com.ashafa/clutch "0.3.0-SNAPSHOT" :exclusions [cheshire com.fasterxml.jackson.dataformat/jackson-dataformat-smile com.fasterxml.jackson.core/jackson-core]]
                 [org.clojure/clojurescript "1.10.339" :exclusions [commons-codec]]
                 [cljs-http "0.1.45" :exclusions [commons-codec]]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4" :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-asset-minifier "0.2.7"
             :exclusions [org.clojure/clojure]]]

  :ring {:handler collab-draw.handler/app
         :uberwar-name "collab_draw.war"}

  :min-lein-version "2.5.0"
  :uberjar-name "collab_draw.jar"
  :main collab-draw.server
  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild
  {:builds {:min
            {:source-paths ["src/cljs" "src/cljc" "env/prod/cljs"]
             :compiler
             {:output-to        "target/cljsbuild/public/js/app.js"
              :output-dir       "target/cljsbuild/public/js"
              :source-map       "target/cljsbuild/public/js/app.js.map"
              :optimizations :advanced
              :pretty-print  false}}

            :app
            {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
             :figwheel {:on-jsload "collab-draw.core/mount-root"}
             :compiler
             {:main "collab_draw.dev"
              :asset-path "/js/out"
              :output-to "target/cljsbuild/public/js/app.js"
              :output-dir "target/cljsbuild/public/js/out"
              :source-map true
              :optimizations :none
              :pretty-print  true}}

             :app-worker 
             {:source-paths ["src/workers"]
              :figwheel true
              :compiler {:output-to "target/cljsbuild/public/js/worker.js"
                         :output-dir "resources/public/js/compiled/out_worker"
                         :source-map-timestamp true
                         :optimizations :none}}
            }
   }

  :figwheel
  {:http-server-root "public"
   :server-port 3449
   :nrepl-port 7002
   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"
                      ]
   :css-dirs ["resources/public/css"]
   :ring-handler collab-draw.handler/app}



  :profiles {:dev {:repl-options {:init-ns collab-draw.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[binaryage/devtools "0.9.10"]
                                  [ring/ring-mock "0.3.2" :exclusions [cheshire]]
                                  [ring/ring-devel "1.6.3"]
                                  [prone "1.5.2"]
                                  [figwheel-sidecar "0.5.16" :exclusions [commons-codec]]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [pjstadig/humane-test-output "0.8.3"]
                                  ]

                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.16"]
                             [lein-doo "0.1.10"]
                            ]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :env {:dev true}}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :source-paths ["env/prod/clj"]
                       :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true}})
