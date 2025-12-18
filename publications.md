---
layout: page
title: Publications
permalink: /publications/
---

## 2025

<div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 40px;">
  <div style="flex-shrink: 0;">
    <img src="/assets/papers/wails25_thumb.png" alt="Paper Thumbnail" style="width: 180px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
  <div>
    <span style="background-color: #003366; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold;">WAILS '25</span>
    <h3 style="margin-top: 10px;">Confidential Retrieval-Augmented Generation in Educational Contexts</h3>
    
    Ludovico Boratto, <strong>Francesco Congiu*</strong>, Gianni Fenu, Giacomo Medda<br>
    <em>2nd Workshop on Artificial Intelligence with and for Learning Sciences (WAILS '25)</em><br>
    Part of the <strong>Lecture Notes in Computer Science (LNCS)</strong> book series, Springer.
    
    <div style="margin-top: 15px;">
      <a href="/assets/papers/confidential-rag-edu.pdf" style="margin-right: 15px;">[PDF]</a>
      <a href="#abstract-rag" style="margin-right: 15px;">[Abstract]</a>
      <a href="#bibtex-rag">[BibTeX]</a>
    </div>
  </div>
</div>

---

### Abstract
<a id="abstract-rag"></a>
In recent years, the Retrieval-Augmented Generation (RAG) paradigm has become central to improving the reliability of systems based on Large Language Models (LLMs), as it grounds generation in evidence from external collections. However, much of the literature focuses almost exclusively on retrieval effectiveness, overlooking a crucial requirement in educational and professional settings: content confidentiality. The absence of mechanisms ensuring that only authorized documents are returned to the user risks limiting adoption in real scenarios. We present RetrievEM, a confidentiality-aware RAG framework validated on the BEIR/FiQA benchmark. Our approach pursues a dual objective: (i) improving retrieval by combining heterogeneous signals from different components, and (ii) ensuring that returned content complies with user-specific access constraints. RetrievEM integrates dense retrieval, reranking with cross-encoders, score-level fusion, and access-aware persona generation. Experimental results show that fusion yields substantial gains over individual components. Considering the limited accessible documents and RAG-related selection bias, we introduce Backfill, a post-processing algorithm that increases the search depth by exploring beyond the initial top-k results, preserving confidentiality without sacrificing retrieval utility. Overall, our RAG system can deliver pedagogically useful content while respecting access policies, showing that effectiveness and confidentiality are not conflicting goals.

### BibTeX
<a id="bibtex-rag"></a>

{% raw %}
```bibtex
@inproceedings{boratto2025confidential,
  title={Confidential Retrieval-Augmented Generation in Educational Contexts},
  author={Boratto, Ludovico and Congiu, Francesco and Fenu, Gianni and Medda, Giacomo and Pau, Antonello},
  booktitle={2nd Workshop on Artificial Intelligence with and for Learning Sciences (WAILS)},
  series={Lecture Notes in Computer Science (LNCS)},
  year={2025},
  publisher={Springer}
}
{% endraw %}
