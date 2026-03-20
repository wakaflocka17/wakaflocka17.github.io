from scholarly import scholarly
import json
from datetime import datetime
import os

author_id = '3vvc7RAAAAAJ'

author: dict = scholarly.search_author_id(author_id)
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])

author['updated'] = str(datetime.now())

author['publications'] = {v['author_pub_id']:v for v in author['publications']}

os.makedirs('results', exist_ok=True)
with open(f'results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False, indent=2)

shieldio_data = {
  "schemaVersion": 1,
  "label": "total citations",
  "message": f"{author['citedby']}",
  "color": "orange"
}
with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)

def create_paper_badge(paper_short_name, full_paper_id):
    try:
        citations = author['publications'][full_paper_id]['num_citations']
        data = {
          "schemaVersion": 1,
          "label": "citations",
          "message": f"{citations}",
          "color": "blue"
        }
        with open(f'results/gs_data_shieldsio_{paper_short_name}.json', 'w') as outfile:
            json.dump(data, outfile, ensure_ascii=False)
    except KeyError:
        print(f"Paper ID {full_paper_id} non trovato.")

create_paper_badge("rag_educational", f"{author_id}:d1gkVwhDpl0C")
create_paper_badge("confidential_rag", f"{author_id}:u5HHmVD_uO8C")