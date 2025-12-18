---
layout: page
title: Publications
permalink: /publications/
---

## 2025

<div style="margin-bottom: 40px; display: flex; align-items: flex-start; gap: 20px;">
  <div style="flex-shrink: 0;">
    <img src="/assets/papers/wails25_thumb.png" alt="Paper Thumbnail" style="width: 180px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">
  </div>

  <div>
    <span style="background-color: #003366; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; font-weight: bold;">WAILS '25</span>
    <span style="background-color: #6c757d; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75em; font-weight: bold; text-transform: uppercase;">Under Peer-Review</span>
    
    <h3 style="margin-top: 8px; margin-bottom: 8px;">Confidential Retrieval-Augmented Generation in Educational Contexts</h3>
    
    Ludovico Boratto, <strong>Francesco Congiu</strong>, Gianni Fenu, Giacomo Medda, Antonello Pau<br>
    <em>2nd Workshop on Artificial Intelligence with and for Learning Sciences (WAILS '25)</em><br>
    <small style="color: #666;">Final version to appear in: <strong>Lecture Notes in Computer Science (LNCS)</strong>, Springer.</small>
    
    <div style="margin-top: 15px; font-size: 0.95em;">
      <a href="/assets/papers/confidential-rag-edu.pdf" target="_blank" style="font-weight: 500; margin-right: 15px;">[PDF]</a>
      <a href="#abstract" style="font-weight: 500;">[Abstract]</a>
    </div>
  </div>
</div>

<hr>

<h3 id="abstract">Abstract</h3>
<p style="text-align: justify; color: #444;">
In recent years, the Retrieval-Augmented Generation (RAG) paradigm has become central to improving the reliability of systems based on Large Language Models (LLMs), as it grounds generation in evidence from external collections. However, much of the literature focuses almost exclusively on retrieval effectiveness, overlooking a crucial requirement in educational and professional settings: content confidentiality. The absence of mechanisms ensuring that only authorized documents are returned to the user risks limiting adoption in real scenarios. We present RetrievEM, a confidentiality-aware RAG framework validated on the BEIR/FiQA benchmark. Our approach pursues a dual objective: (i) improving retrieval by combining heterogeneous signals from different components, and (ii) ensuring that returned content complies with user-specific access constraints. RetrievEM integrates dense retrieval, reranking with cross-encoders, score-level fusion, and access-aware persona generation. Experimental results show that fusion yields substantial gains over individual components. Considering the limited accessible documents and RAG-related selection bias, we introduce Backfill, a post-processing algorithm that increases the search depth by exploring beyond the initial top-k results, preserving confidentiality without sacrificing retrieval utility. Overall, our RAG system can deliver pedagogically useful content while respecting access policies, showing that effectiveness and confidentiality are not conflicting goals.
</p>
